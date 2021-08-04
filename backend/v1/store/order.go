// Mock database. DO NOT EDIT.

package store

import (
	"github.com/bigbluedisco/tech-challenge/backend/v1/order/rpc"
	"github.com/pkg/errors"
	"sync"
)

type OrderTransactor interface {
	Order(id string) (*order.Order, error)
	Orders() []*order.Order
	SetOrder(*order.Order)
}

type orderStore struct {
	lock   sync.RWMutex
	orders []*order.Order
}

func NewOrderTransactor() OrderTransactor {
	return &orderStore{}
}

func (os *orderStore) Orders() []*order.Order {
	return os.orders
}

func (os *orderStore) Order(id string) (*order.Order, error) {
	for _, ord := range os.orders {
		if ord.GetId() == id {
			return ord, nil
		}
	}
	return nil, errors.Errorf("order not found: id=%s", id)
}

func (os *orderStore) SetOrder(order *order.Order) {
	os.lock.Lock()
	for i, ord := range os.orders {
		if ord.GetId() == order.GetId() {
			os.orders[i] = order
			break
		}
	}
	os.orders = append(os.orders, order)
	os.lock.Unlock()
}
