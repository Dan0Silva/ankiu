package routes

import (
	"net/http"

	loginController "github.com/Dan0Silva/ankiu/backend/src/controllers"
)

var LoginRoutes = []Routes{
	{
		Uri:         "/login",
		Method:      http.MethodPost,
		Function:    loginController.Login,
		RequireAuth: false,
	},
}
