
const useSendMessage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const email = e.target.email.value
            const phone = e.target.phone.value
            const firstName = e.target.firstName.value
            const lastName = e.target.lastName.value
            const msg = e.target.msg.value


            const response = await fetch('/api/submitMsg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, phone, firstName, lastName, msg }),
            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error)
        }

        e.target.email.value = ""
        e.target.phone.value = ""
        e.target.firstName.value = ""
        e.target.lastName.value = ""
        e.target.msg.value = ""
    }

    return handleSubmit
};

export default useSendMessage;