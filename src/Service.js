import axios from "axios";

class Service {
    url = `http://localhost:6882/contracts`
    obj = {
        "contracts": [
            "55UNq9mHHfU8u8L8VYFwptk7vwn3j2Tk48uk5i9qnUKF"
        ]
    }

    async getData() {
        try{
            await axios.post(this.url, this.obj).then((el) => {
                console.log(el)
            });
        }catch (e) {
            console.log(e)
        }
    }

    async getSupp(){
        try {
            return await axios.get(this.url + "/55UNq9mHHfU8u8L8VYFwptk7vwn3j2Tk48uk5i9qnUKF/SUPPLIERS_BMW")
        } catch (e) {
            console.log(e)
        }
    }

    async getDist() {
        try{
            return await axios.get(this.url + "/349WEvfe8X6ExxHzukkkezCadGD6d2qm7s5zv4Gj3UwQ/DISTRIBUTOR_SAdwadawdawd")
        }catch (e){
            console.log(e)}
    }
}

export default new Service();