// Mock database. DO NOT EDIT.

package store

import (
	"github.com/bigbluedisco/tech-challenge/backend/v1/product/rpc"
	"github.com/pkg/errors"
)

type ProductTransactor interface {
	Product(id string) (*product.Product, error)
	Products() []*product.Product
}

type productStore struct {
	products []*product.Product
}

func NewProductTransactor() ProductTransactor {
	return &productStore{products: []*product.Product{{
		Id:    "PIPR-JACKET-SIZM",
		Name:  "Pied Piper Jacket - Size M",
		Price: 25,
	}, {
		Id:    "PIPR-MOSPAD-0000",
		Name:  "Silicon Valley Mousepad",
		Price: 10.5,
	}, {
		Id:    "PIPR-JOGCAS-SIZL",
		Name:  "Jogging Casual - Size L",
		Price: 25,
	}, {
		Id:    "PIPR-PULT-SIZS",
		Name:  "Pull Tee-Shirt Light - Size S",
		Price: 29.99,
	}, {
		Id:    "PIPR-CRMSOL-50ML",
		Name:  "Crème Solaire 50ml",
		Price: 19.99,
	}}}
}

func (ps *productStore) Products() []*product.Product {
	return ps.products
}

func (ps *productStore) Product(id string) (*product.Product, error) {
	for _, pdt := range ps.products {
		if pdt.GetId() == id {
			return pdt, nil
		}
	}
	return nil, errors.Errorf("product not found: id=%s", id)
}
