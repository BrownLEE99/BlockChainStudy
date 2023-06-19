const Adoption = artifacts.require("Adoption");

contract("Adoption",(accounts) => {
    let adoption;
    let exepectedPetId;

    before(async() => {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retrieving acount addresses",async()=> {
        before("adopt a pet using account[0]",async()=>{
            await adoption.adopt(8,{from:accounts[0]});
            exepectedPetId = accounts[0];
        });

        it("can fetch the address of an owner by pet id",async()=>{
            const adopter = await adoption.adopters(8);
            assert.equal(adopter,exepectedPetId,"The Owner of the adp[ted pet should be the first account");
        });
    });
});