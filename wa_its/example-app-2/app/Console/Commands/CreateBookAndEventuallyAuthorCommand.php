<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Author;
use App\Models\Book;

class CreateBookAndEventuallyAuthorCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'books:create {book_name} {author_first_name} {author_last_name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a book and eventually an author if it does not exist yet';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $book_name=$this->argument('book_name');
        $author_first_name=$this->argument('author_first_name');
        $author_last_name=$this->argument('author_last_name');

        $author = Author::firstOrCreate([
            'first_name' => $author_first_name,
            'last_name' => $author_last_name
        ]);

        //dump($author->toArray());

        $book = Book::firstOrNew([
            'book_name' => $book_name
        ]);
        $book->author_id = $author->id;
        $book->save();

        //dump($book->toArray());

        $this->table(
            ['Chiave', 'Valore'],
            [
                ['Book ID', $book->id],
                ['Book name', $book->book_name],
                ['Author ID', $book->author->id],
                ['Author First Name', $book->author->first_name],
                ['Author Last Name', $book->author->last_name],
            ]
        
        );

        return 0;
    }
}
