<?php

namespace App\Console\Commands;

use App\Models\Book;
use Illuminate\Console\Command;

class MioComandoCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'miocomando';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $book_name = $this->argument('book_name');
        $book_author = $this->argument('book_author');
        //dump($book_name);
        //dump($book_author);

        $book = Book::Create(['book_name' => $book_name, 'book_author' => $book_author]);
        dump($book);
        return 0;
    }
}
