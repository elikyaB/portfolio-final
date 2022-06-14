export const post = async ({request}) => {
    try {
        const response = await fetch("https://formspree.io/f/xyyovnqb", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Origin": "*"
            },
            body: request.body
        })

        return {
            status: response?.status,
            body: {message: 'Message sent!'}
        }
    } catch (error) {
        console.log(error)
        return {
            body: {message: 'Something went wrong! Please try again later.'}
        }
    }
}