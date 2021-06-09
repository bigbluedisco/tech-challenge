package store

import product "github.com/bigbluedisco/tech-challenge/backend/v1/rpc"

type Transactor interface {
	Product(id string) (*product.Product, error)
	Products() []*product.Product
	SetProduct(*product.Product)
	DeleteProduct(id string) error
}

type database struct{}

func NewTransactor() Transactor {
	return &database{}
}

func (db *database) Product(id string) (*product.Product, error) {
	return nil, nil
}

func (db *database) Products() []*product.Product {
	return nil
}

func (db *database) SetProduct(*product.Product) {
	return
}

func (db *database) DeleteProduct(id string) error {
	return nil
}
