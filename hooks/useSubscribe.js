
const useSubscribe = () => {
    const handleSubmit = async (e) =>{
        console.log(e)
        e.preventDefault()

        const email = e.target.email.value
        console.log(email)

        e.target.email.value = ""
    }

    return handleSubmit

};

export default useSubscribe;