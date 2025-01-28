package controllers

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/models"
	"github.com/Dan0Silva/ankiu/backend/src/response"
)

func Login(w http.ResponseWriter, r *http.Request) {
	var user models.User

	requestBody, err := io.ReadAll(r.Body)
	if err == nil {
		response.Error(w, response.ReadRequestBodyError, http.StatusBadRequest, nil)
		return
	}

	if err = json.Unmarshal(requestBody, &user); err != nil {
		response.Error(w, response.ConvertRequestBodyToJSONError, http.StatusInternalServerError, nil)
		return
	}

	// creating a db connection


	/*
		continuar com padronização nas strings das respostas da api
	*/
}
