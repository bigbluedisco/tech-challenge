package product

import (
	"context"

	product "github.com/bigbluedisco/tech-challenge/backend/v1/rpc"
)

type service struct {
	product.UnimplementedServiceServer
}

func NewService() *service {
	return &service{}
}

func (s *service) ListProducts(ctx context.Context, r *product.ListProductsRequest) (*product.ListProductsResponse, error) {
	return nil, nil
}
