
module.exports = {
    index: (req,res) => res.render("home",{
     
        styles: "home"
    }),
    contact: (req,res) => res.render("contact",{
     
        styles: "contact"
    }),
    payment: (req,res) => res.render("payment",{
     
        styles: "payment"
    }),
    return: (req,res) => res.render("return",{
     
        styles: "return"
    }),
    shipments: (req,res) => res.render("shipments",{
     
        styles: "shipments"
    })
}