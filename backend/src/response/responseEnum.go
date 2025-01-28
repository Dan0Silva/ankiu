package response

type ReponseMessage int

const (
	RequestSuccess ReponseMessage = iota + 1
	
	ReadRequestBodyError 
	ConvertRequestBodyToJSONError
)

func (r ReponseMessage) String() string {
	return [...]string{
		"request was successfuly", 										// RequestSuccess
		
		"error to try read request body", 						// ReadRequestBodyError
		"error to try convert request body to JSON",	// ConvertRequestBodyToJSONError
	}[r-1]
}
