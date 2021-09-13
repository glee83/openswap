class HistoryController {
    history(req, res, next) {

        res.json(
            { 
                user: 'Glee', 
                transactionType: '', 
                transactionTime: [], 
                paymenMethod: ''  
            }
        );
    }

    
}

module.exports = new HistoryController()