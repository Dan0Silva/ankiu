package repository

import (
	"database/sql"
	"errors"
	"time"

	"github.com/Dan0Silva/ankiu/backend/src/models"
	"github.com/google/uuid"
)

type usersRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *usersRepository {
	return &usersRepository{db}
}

func (r usersRepository) GetUserByEmail(email string) (*models.User, error) {
	var user models.User

	rows, err := r.db.Query("SELECT * FROM USERS WHERE EMAIL = ?", email)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		if err := rows.Scan(&user.Id, &user.Name, &user.Email, &user.Password, &user.CreatedAt); err != nil {
			return nil, err
		}
	}

	defaultTime := time.Time{}
	defaultUUID := uuid.UUID{}
	
	if user.Id == defaultUUID.String() || user.CreatedAt == defaultTime {
		return nil, errors.New("could not find any user")
	}

	return &user, nil
}