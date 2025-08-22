<?php

namespace App\Repositories;

use App\Models\Client;
use Illuminate\Pagination\LengthAwarePaginator;
use Spatie\QueryBuilder\QueryBuilder;

class ClientRepository
{
  public function getAllClients($perPage = 10): LengthAwarePaginator
  {
    return QueryBuilder::for(Client::class)
      ->paginate($perPage);
  }

  public function createClient(array $data): Client
  {
    return Client::create($data);
  }
  public function getClientById(int $id): Client
  {
    return Client::findOrFail($id);
  }
  public function updateClient(int $id, array $data): Client
  {
    $client = Client::findOrFail($id);
    $client->update($data);

    return $client;
  }

  public function deleteClient(int $id): void
  {
    Client::findOrFail($id)->delete();
  }

}
