package response

type ReponseMessage int

const (
	RequestSuccess ReponseMessage = iota + 1
	
	ReadRequestBodyError 
	ConvertRequestBodyToJSONError
	DatabaseConnectionError
	GetDBInformationError
	LoginError
)

func (r ReponseMessage) String() string {
	return [...]string{
		"request was successfuly", 													// RequestSuccess
		
		"error trying read request body", 									// ReadRequestBodyError
		"error trying convert request body to JSON",				// ConvertRequestBodyToJSONError
		"error trying to establish database connection",  	// DatabaseConnectionError
		"error trying get information from database",				// GetDBInformationError
		"error trying loggin",															// LoginError
		}[r-1]
}
