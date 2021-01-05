export class CustomerReservation{
    roomCapacity = 30;
    customerCount = 10;

    registerCustomer(){
        return ++this.customerCount;
    }
    unregisterCustomer(){
        return --this.customerCount;
    }
    reserveRoome(): boolean{
        let roomReserved = false;
        if(this.customerCount < this.roomCapacity){
            this.customerCount++;
            roomReserved = true;
        }
        return roomReserved;
    }
}