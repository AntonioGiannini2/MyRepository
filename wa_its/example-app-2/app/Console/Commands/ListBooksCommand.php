<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Book;
use App\Models\Author;

class ListBooksCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'books:list {--author-first-name=} {--author-last-name=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Lists books (eventually by a specific author)';

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
        $author_first_name = $this->option('author-first-name');
        $author_last_name = $this->option('author-last-name');

        $where = [];

        if ($author_first_name != null) {
            $where['first_name'] = $author_first_name;
        }

        if ($author_last_name != null) {
            $where['last_name'] = $author_last_name;
        }

        //dd($where);

        $author_ids = Author::where($where)->get('id')->pluck('id')->toArray();

        //dd($author_ids);

        $books = Book::whereIn('author_id', $author_ids)->get();

        $this->table(
            ['Book ID', 'Book Name'],
            $books->map(function ($book){
                return [$book->id, $book-> book_name];
            })
        );

        //dump($author_first_name, $author_last_name);


        return 0;
    }
}
