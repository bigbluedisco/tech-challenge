package main

import (
	"log"
	"net"
	"os"
	"os/signal"

	"github.com/bigbluedisco/tech-challenge/backend/v1/product"
	productpb "github.com/bigbluedisco/tech-challenge/backend/v1/rpc"
	"google.golang.org/grpc"
)

func main() {
	log := log.Default()

	lis, err := net.Listen("tcp", "0.0.0.0:80")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	defer lis.Close()

	opts := []grpc.ServerOption{}
	srv := grpc.NewServer(opts...)
	defer srv.Stop()

	prd := product.NewService()
	productpb.RegisterServiceServer(srv, prd)

	go func() {
		log.Println("starting server...")
		if err := srv.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()

	// wait for control C to exit
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch
	log.Println("stopping the server")
}
