<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style2.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script src="script2.js" defer></script>
    <title>Comic Universe</title>
</head>
<body>
    <header>
        <h1>Comic Universe</h1>
        <button id="cart-icon" class="btn btn-info" onclick="toggleCart()">&#128722 <span id="cart-count" class="badge bg-primary">0</span></button>
    </header>

    <section id="login">
        <h2>Login</h2>
        <form>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Nome de Usuário">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" placeholder="Senha">
            </div>
            <button type="button" class="btn btn-primary" onclick="login()">Entrar</button>
        </form>
    </section>

    <section id="products">
        <h2>Produtos</h2>

        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product1.jpg?raw=true" class="img-thumbnail" alt="Produto 1">
            <h3>Produto 1</h3>
            <p>Preço: R$ 50</p>
            <button class="btn btn-success" onclick="addToCart(1)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product2.jpg?raw=true" class="img-thumbnail" alt="Produto 2">
            <h3>Produto 2</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(2)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product3.jpg?raw=true" class="img-thumbnail" alt="Produto 3">
            <h3>Produto 3</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(3)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product4.jpg?raw=true" class="img-thumbnail" alt="Produto 4">
            <h3>Produto 4</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(4)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product5.jpg?raw=true" class="img-thumbnail" alt="Produto 5">
            <h3>Produto 5</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(5)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product6.jpg?raw=true" class="img-thumbnail" alt="Produto 6">
            <h3>Produto 6</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(6)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product7.jpg?raw=true" class="img-thumbnail" alt="Produto 7">
            <h3>Produto 7</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(7)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product8.jpg?raw=true" class="img-thumbnail" alt="Produto 8">
            <h3>Produto 8</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(8)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product9.jpg?raw=true" class="img-thumbnail" alt="Produto 9">
            <h3>Produto 9</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(9)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="https://github.com/MasterYoda5/site-vendas/blob/main/img/product10.jpg?raw=true" class="img-thumbnail" alt="Produto 10">
            <h3>Produto 10</h3>
            <p>Preço: R$ 40</p>
            <button class="btn btn-success" onclick="addToCart(10)">Adicionar ao Carrinho</button>
        </div>
    </section>



    <div id="cart" class="hidden">
        <h2>Carrinho de Compras</h2>
        <ul id="cart-items" class="list-group">
        </ul>
        <button id="checkout-button" class="btn btn-primary" onclick="checkout()">Finalizar Compra</button>
        <button id="clear-cart-button" class="btn btn-danger" onclick="clearCart()">Esvaziar Carrinho</button>
    </div>

    <div id="payment" class="hidden">
        <h2>Selecione o método de pagamento</h2>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="credit" name="payment" value="credit">
            <label class="form-check-label" for="credit">Cartão de Crédito</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" id="debit" name="payment" value="debit">
            <label class="form-check-label" for="debit">Cartão de Débito</label>
        </div>
        <button id="pay-button" class="btn btn-primary" onclick="pay()">Pagar</button>
    </div>

    <div id="credit-card" class="hidden">
        <h2>Preencher Dados do Cartão</h2>
        <form>
            <div class="mb-3">
                <label for="card-number" class="form-label">Número do Cartão:</label>
                <input type="text" class="form-control" id="card-number">
            </div>
            <div class="mb-3">
                <label for="expiration-date" class="form-label">Data de Validade:</label>
                <input type="text" class="form-control" id="expiration-date">
            </div>
            <button class="btn btn-primary" onclick="completePayment()">Pagar</button>
        </form>
    </div>

    <div id="popup" class="hidden">
        <h2>Compra Efetuada com Sucesso!</h2>
        <button class="btn btn-primary" onclick="closePopup()">Fechar</button>
    </div>
</body>
</html>




----- css

h2 {
    color: white;
    background-color: #551A8B;
   
    padding: 10px solid ; 
  }




body {
    font-family: sans-serif;
    background-color:aqua;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #551A8B;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

#cart-icon {
    font-size: 24px;
    background: transparent;
    border: none;
    color:black;
    cursor: pointer;
}

section {
    padding: 20px;
}

.product {
    color:white;
    padding: 10px;
    margin: 20px;
    width: 200px;
    text-align: center;
    background-color: #551A8B;;
    display: inline-block;
    vertical-align: top;
}

button {
    cursor: pointer;
    display: block;
    margin: 10px auto;
}

.hidden {
    display: none;
}




----- js

h2 {
    color: white;
    background-color: #551A8B;
   
    padding: 10px solid ; 
  }




body {
    font-family: sans-serif;
    background-color:aqua;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #551A8B;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

#cart-icon {
    font-size: 24px;
    background: transparent;
    border: none;
    color:black;
    cursor: pointer;
}

section {
    padding: 20px;
}

.product {
    color:white;
    padding: 10px;
    margin: 20px;
    width: 200px;
    text-align: center;
    background-color: #551A8B;;
    display: inline-block;
    vertical-align: top;
}

button {
    cursor: pointer;
    display: block;
    margin: 10px auto;
}

.hidden {
    display: none;
}
