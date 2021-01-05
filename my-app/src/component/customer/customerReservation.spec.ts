import { CustomerReservation } from "./customerReservation";

describe("customer Reservation", ()=>{
    let customerService : CustomerReservation;

    beforeEach(()=>{ customerService = new CustomerReservation() })

    it("should increased by 1", ()=>{
        let custCount = customerService.registerCustomer();
        expect(custCount).toEqual(11)
    });


    it("should decreased by 1", ()=>{
        let custCount = customerService.unregisterCustomer();
        expect(custCount).toBe(9);
    });
});

describe('Room Reservation', () => {
    it("Test Room was reserved or not",()=>{
        //Arrange
        let custReserve = new CustomerReservation();
        //Act
        let isReserved = custReserve.reserveRoome();
        //Assert
        expect(isReserved).toBeTruthy();
    })
})
