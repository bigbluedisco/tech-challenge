// Mock database. DO NOT EDIT.

package store

import (
	"testing"

	product "github.com/bigbluedisco/tech-challenge/backend/v1/product/rpc"
	"github.com/stretchr/testify/suite"
)

type productStoreTestSuite struct {
	suite.Suite
	ps *productStore
}

func (s *productStoreTestSuite) SetupTest() {
	s.ps = &productStore{[]*product.Product{
		{
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
		},
	}}
}

func TestProductStoreTestSuite(t *testing.T) {
	suite.Run(t, new(productStoreTestSuite))
}

func (s *productStoreTestSuite) TestProducts_OK() {
	s.Equal(s.ps.products, s.ps.Products())
}

func (s *productStoreTestSuite) TestProduct_OK() {
	pdt, err := s.ps.Product("PIPR-MOSPAD-0000")
	s.Require().NoError(err)
	s.Equal(s.ps.products[1], pdt)
}

func (s *productStoreTestSuite) TestProduct_Err() {
	unknownID := "PIPR-MOSPAD-0001"
	pdt, err := s.ps.Product(unknownID)
	s.Nil(pdt)
	s.Error(err)
	s.Equal("product not found: id="+unknownID, err.Error())
}
