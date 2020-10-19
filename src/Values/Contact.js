
const Contact = class {
    constructor(id, name, phone)
    {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    clone = function () {
        return new Contact(this.id, this.name, this.phone);
    }
};

export default Contact;