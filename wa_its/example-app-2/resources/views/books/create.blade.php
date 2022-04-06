@extends('layouts.app')

@section('contents')
    <h1>Create Book</h1>

    @if ($errors->any())
        <p style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </p> 
    @endif

    <form method="POST" action="{{route('books.store')}}">
        @csrf
        <p>
            <label for="book_name_input">Book name</label>
            <input type="text" name="book_name" id="book_name_input" value=""/>
        </p>
        <p>
            <input type="submit" value="Save book"/>
        </p>
    </form>
@endsection