module Api
  module V1
    class BooksController < ApplicationController
      protect_from_forgery with: :null_session

      before_action :find_book, only: %w[show update destroy]

      def index
        books = Book.all
        render json: BookSerializer.new(books, options).serialized_json
      end

      def show
        render json: BookSerializer.new(@book, options).serialized_json
      end

      def create
        book = Book.new(book_params)

        if book.save
          render json: BookSerializer.new(book).serialized_json
        else
          render json: { errors: book.errors.messages }, status: 422
        end
      end

      def update
        if @book.update(book_params)
          render json: BookSerializer.new(@book, options).serialized_json
        else
          render json: { errors: @book.errors.messages }, status: 422
        end
      end

      def destroy
        if @book.destroy
          head :no_content
        else
          render json: { errors: @book.errors.messages }, status: 422
        end
      end

      private
      
      def book_params
        params.require(:book).permit(:name)
      end

      def find_book
        @book = Book.find_by_slug(params[:slug])
      end

      def options
        @options ||= { include: %w[reviews] }
      end
    end
  end
end
