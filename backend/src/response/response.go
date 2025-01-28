package response

import (
	"encoding/json"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/models"
)

func sendReponse(w http.ResponseWriter, message ReponseMessage, statusCode int, data interface{}) {
	responseStruct := models.Response{
		Status: statusCode,
		Message: message.String(),
		Data: nil,
	}

	if data != nil {
		responseStruct.Data = data
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	if err := json.NewEncoder(w).Encode(responseStruct); err != nil {
		http.Error(w, "Error encoding response: "+err.Error(), http.StatusInternalServerError)
	}
}

func Success(w http.ResponseWriter, statusCode int, data interface{}){
	sendReponse(w, RequestSuccess, statusCode, data)
}

func Error(w http.ResponseWriter, message ReponseMessage, statusCode int, data interface{}) {
	sendReponse(w, message, statusCode, data)
} 