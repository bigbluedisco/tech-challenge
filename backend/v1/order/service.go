package order

import (
	"context"

	product "github.com/bigbluedisco/tech-challenge/backend/v1/order/rpc"
	"github.com/bigbluedisco/tech-challenge/backend/v1/store"
)

type service struct {
	product.UnimplementedServiceServer
	t store.OrderTransactor
}

func NewService(ot store.OrderTransactor) *service {
	return &service{t: ot}
}

func (s *service) ListOrders(ctx context.Context, r *product.ListOrdersRequest) (*product.ListOrdersResponse, error) {
	return &product.ListOrdersResponse{Orders: s.t.Orders()}, nil
}
