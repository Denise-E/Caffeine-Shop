
module.exports = {
    index: (req,res) => {
        /*
        if(req.user){
            return res.send(req.user)
        } */
        return res.render("home",{
        styles: "main/home"
        })
        
    },
    contact: (req,res) => res.render("headerLinks/contact",{
     
        styles: "headerLinks/contact"
    }),
    payment: (req,res) => res.render("footerLinks/payment",{
     
        styles: "footerLinks/payment"
    }),
    return: (req,res) => res.render("footerLinks/return",{
     
        styles: "footerLinks/return"
    }),
    shipments: (req,res) => res.render("footerLinks/shipments",{
     
        styles: "footerLinks/shipments"
    })
}