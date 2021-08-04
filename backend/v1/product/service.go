package product

import (
	"context"

	product "github.com/bigbluedisco/tech-challenge/backend/v1/product/rpc"
	"github.com/bigbluedisco/tech-challenge/backend/v1/store"
)

type service struct {
	product.UnimplementedServiceServer
	t store.ProductTransactor
}

func NewService(pt store.ProductTransactor) *service {
	return &service{t: pt}
}

func (s *service) ListProducts(ctx context.Context, r *product.ListProductsRequest) (*product.ListProductsResponse, error) {
	return &product.ListProductsResponse{Products: s.t.Products()}, nil
}
