<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginatedRequest;
use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    public function __construct(protected ClientRepository $clientRepository)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index(PaginatedRequest $request)
    {
        try {
            $perPage = $request->input('per_page', 10);

            $clients = $this->clientRepository->getAllClients($perPage);

            return ClientResource::collection($clients);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch clients',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        try {
            $validated = $request->validated();
            $client = $this->clientRepository->createClient($validated);
            return new ClientResource($client);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to create client',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         try {
            $this->clientRepository->deleteClient($id);
            return response()->json([
                'message' => "Delete successfully $id"
            ], 500);
         }catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to delete client',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
