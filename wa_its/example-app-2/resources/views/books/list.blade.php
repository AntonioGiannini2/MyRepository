@extends('layouts.app')

@section('contents')
    <h1>Books</h1>

    <a href="{{route('books.create')}}">Create book</a>

    <table border='1'>
        <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Book Author</th>
        </tr>
        @foreach ($books as $book)
            <tr>
                <td>
                    <a href="{{route('books.show', [ 'book' => $book->id])}}">
                        {{$book->id}}
                    </a>
                </td>
                <td>{{$book->book_name}}</td>
                <td>
                    @if ($book->author)
                        {{$book->author->first_name}} {{$book->author->last_name}}
                    @else
                     <i>Not associated to any author</i>
                    @endif
                </td>
            </tr>
        @endforeach
    </table>
    {{-- @php(dump($books)) --}}
@endsection