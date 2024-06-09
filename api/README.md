### Authentication Endpoints

These are just example APIs based on the provided functionality. You can further expand or modify them based on BARK Bot´s specific requirements and the actual implementation of the backend services.

#### Register User
- **URL:** `/api/auth/register`
- **Method:** POST
- **Request Body:**
  ```json
  {
      "username": "exampleuser",
      "email": "user@example.com",
      "password": "examplepassword"
  }
  ```
- **Response:**
  - Status Code: 201 (Created)
  ```json
  {
      "message": "User registered successfully"
  }
  ```
  - Status Code: 400 (Bad Request)
  ```json
  {
      "message": "User already exists"
  }
  ```

#### Login User
- **URL:** `/api/auth/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
      "email": "user@example.com",
      "password": "examplepassword"
  }
  ```
- **Response:**
  - Status Code: 200 (OK)
  ```json
  {
      "token": "jwt_token"
  }
  ```
  - Status Code: 401 (Unauthorized)
  ```json
  {
      "message": "Invalid email or password"
  }
  ```

### Token Swap Endpoint

#### Initiate Token Swap
- **URL:** `/api/swap/initiate`
- **Method:** POST
- **Request Body:**
  ```json
  {
      "fromToken": "SOL",
      "toToken": "USDC",
      "amount": 10,
      "walletAddress": "SOL_WALLET_ADDRESS"
  }
  ```
- **Response:**
  - Status Code: 200 (OK)
  ```json
  {
      "message": "Token swap initiated successfully",
      "txId": "transaction_id"
  }
  ```
  - Status Code: 400 (Bad Request)
  ```json
  {
      "message": "Failed to initiate token swap",
      "error": "Insufficient liquidity"
  }
  ```

### Trade Status Endpoint

#### Check Trade Status
- **URL:** `/api/trade/status`
- **Method:** GET
- **Query Parameters:**
  - `tradeId`: Trade ID to check status
- **Response:**
  - Status Code: 200 (OK)
  ```json
  {
      "status": "completed"
  }
  ```
  - Status Code: 404 (Not Found)
  ```json
  {
      "message": "Trade not found"
  }
  ```