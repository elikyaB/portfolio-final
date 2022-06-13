<script>
    import {colors, mode} from '$lib/stores'
    export let toggleForm

    let subject
    let name
    let email = 'boy@oh.boy'
    let message
    let valid
    let invalid

    $: if (email == '' || email == undefined) {
            valid = false
            invalid = false 
        } else {
            let regex = email.match(/[a-z 0-9 . _ - +]+@[a-z 0-9 -]+[.][a-z]{2,}/)
            if (regex != null) {
                valid = true
                invalid = false
            } else {
                valid = false
                invalid = true
            }
        }
    
    $: color = colors[$mode].hL

    const submitForm = async () => {
        const submit = await fetch("https://formspree.io/f/xyyovnqb", {
            method: "post",
            headers: {''}
            body: JSON.stringify({
                subject, name, email, message
            })
        })

        console.log(submit)

        const data = await submit.json()
        console.log(data)
    }
</script>

<form class="contain" on:submit|preventDefault={submitForm}>
    <div class="field">
        <label for="subject" class="label" style:color>
            Subject
        </label>
        <div class="control is-expanded">
            <div class="select is-fullwidth">
                <select id="subject" name="subject" class="select is-fullwidth" bind:value={subject}>
                    <option value="freelance">Freelance Proposal</option>
                    <option value="fulltime">Full-time Employment</option>
                    <option value="startup">Startup Venture</option>
                    <option value="consulting">Product Consulting</option>
                </select>
            </div>
        </div>
    </div>
    <div class="mt-5">
        <legend class="label" style:color>From</legend>
        <div class="field">
            <label for="name" class="hide">Name</label>
            <div class="control is-expanded has-icons-left">
                <input id="name" name="name" class="input" type="text" placeholder="Name" bind:value={name} required/>
                <span class="icon is-small is-left">
                    <i class="iconify-inline" data-icon="fa:user"/>
                </span>
            </div>
        </div>
        <div class="field">
            <label for="email" class="hide">Email</label>
            <div class="control is-expanded has-icons-left has-icons-right">
                <input id="email" name="email" class="input" class:is-success={valid} class:is-danger={invalid} type="email" placeholder="Email" bind:value={email} required/>
                <span class="icon is-small is-left">
                    <i class="iconify-inline" data-icon="fa:envelope"/>
                </span>
                {#if valid}
                <span class="icon is-small is-right">
                    <i class="iconify-inline" data-icon="fa:check"/>
                </span>
                {:else if invalid}
                <span class="icon is-small is-right">
                    <i class="iconify-inline" data-icon="fa:exclamation-triangle"/>
                </span>
                {/if}
            </div>
        </div>
    </div>
    <div class="field mt-5">
        <label for="message" class="label" style:color>Message</label>
        <div class="control is-expanded">
            <textarea id="message" name="message" class="textarea is-fullwidth" placeholder="How can I best help you?" bind:value={message}/>
        </div>
    </div>
    <div class="field is-grouped is-grouped-centered mt-5">
        <div class="control is-flex is-justify-content-center">
            <button class="button" type="button" on:click={toggleForm}>
                Cancel
            </button>
        </div>
        <div class="control is-flex is-justify-content-center">
            <!-- {#if !valid}
            <fieldset disabled>
                <button class="button" style:color={colors[$mode].bG} style:background-color={color}>
                    Send
                </button>
            </fieldset>
            {:else} -->
            <button class="button" type="submit" style:color={colors[$mode].bG} style:background-color={color}>
                Send
            </button>
            <!-- {/if} -->
        </div>
    </div>
</form>