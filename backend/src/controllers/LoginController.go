package controllers

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/database"
	"github.com/Dan0Silva/ankiu/backend/src/models"
	"github.com/Dan0Silva/ankiu/backend/src/repository"
	"github.com/Dan0Silva/ankiu/backend/src/response"
)

func Login(w http.ResponseWriter, r *http.Request) {
	var user models.User

	requestBody, err := io.ReadAll(r.Body)
	if err != nil {
		response.Error(w, response.ReadRequestBodyError, http.StatusBadRequest, err.Error())
		return
	}

	if err = json.Unmarshal(requestBody, &user); err != nil {
		response.Error(w, response.ConvertRequestBodyToJSONError, http.StatusInternalServerError, err.Error())
		return
	}

	db, err := database.Connect()
	if err != nil {
		response.Error(w, response.DatabaseConnectionError, http.StatusInternalServerError, err.Error())
		return
	}
	defer db.Close()

	userRepository := repository.NewUserRepository(db)

	userFromDB, err := userRepository.GetUserByEmail(user.Email)
	if err != nil {
		response.Error(w, response.GetDBInformationError, http.StatusInternalServerError, err.Error())
		return
	}

	if user.Password != userFromDB.Password {
		response.Error(w, response.LoginError, http.StatusUnauthorized, "incorrect password")
		return
	}

	response.Success(w, http.StatusOK, nil)
}
