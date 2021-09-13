class TransactionController{
    index(req, res) {
        res.json({ message: "Total transactions", total: Number, transactions: [] })
    }

    buy(req, res, next){
        (!req.params.id)?res.json({message:'Tramsaction Failed '}):res.json({message:'Successful Transaction'})
        next()
    }
    
    sell(req, res, next){
        (!req.params.id)?res.json({message:'Tramsaction Failed'}):res.json({message:'Successful Transaction'})
        next()
    }

   
    details(req, res,next) {
        res.json({
            date: Date,
            amount: Number,
            transactionID: Number,
            description: String,
            category:[{id: String, group: String }], //Group could be Deposits, Withdrawals or Trades 
            data: []
        })
    }

    
    deposit(req, res, next){
        res.json({
            id: String,
            data: [],
            success: true,
            message: "amount successfully deposited in account"
        })
    }

    withdraw(req,res,next){
        res.json({
            
        })
    }

}

module.exports = new TransactionController()
