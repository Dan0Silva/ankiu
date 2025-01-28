package controllers

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/models"
)

func Login(w http.ResponseWriter, r *http.Request) {
	var user models.User

	requestBody, err := io.ReadAll(r.Body)
	if err != nil {
		// creating a message module
	}

	if err = json.Unmarshal(requestBody, &user); err != nil {
		// creating a message module
	}

	// creating a db connection
}
