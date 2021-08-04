// Mock database. DO NOT EDIT.

package store

import (
	"testing"

	"github.com/bigbluedisco/tech-challenge/backend/v1/order/rpc"
	"github.com/stretchr/testify/suite"
)

type orderStoreTestSuite struct {
	suite.Suite
	os *orderStore
}

func (s *orderStoreTestSuite) SetupTest() {
	s.os = &orderStore{
		orders: []*order.Order{{Id: "1"}, {Id: "2"}, {Id: "3"}},
	}
}

func TestOrderStoreTestSuite(t *testing.T) {
	suite.Run(t, new(orderStoreTestSuite))
}

func (s *orderStoreTestSuite) TestOrders_OK() {
	s.Equal(s.os.orders, s.os.Orders())
}

func (s *orderStoreTestSuite) TestOrder_OK() {
	pdt, err := s.os.Order("2")
	s.Require().NoError(err)
	s.Equal(s.os.orders[1], pdt)
}

func (s *orderStoreTestSuite) TestOrder_Err() {
	unknownID := "5"
	od, err := s.os.Order(unknownID)
	s.Nil(od)
	s.Error(err)
	s.Equal("order not found: id="+unknownID, err.Error())
}

func (s *orderStoreTestSuite) TestSetOrder_OK() {
	od := &order.Order{Id: "4"}
	s.os.SetOrder(od)
	s.Len(s.os.orders, 4)
	s.Equal(od, s.os.orders[3])
	// reset the list
	s.os.orders = s.os.orders[:3]
}
