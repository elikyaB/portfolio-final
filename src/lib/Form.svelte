<form action="mailto:elikyabokanga+webdev@gmail.com" method="post">
    <div class="field is-horizontal">
        <div class="field-label is-normal">
          <legend class="label has-text-light">From</legend>
        </div>
        <div class="field-body">
            <div class="field">
                <label for="name" class="hide">Name</label>
                <div class="control is-expanded has-icons-left">
                    <input id="name" class="input" type="text" placeholder="Name"/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"/>
                    </span>
                </div>
            </div>
            <div class="field">
                <label for="email" class="hide">Email</label>
                <div class="control is-expanded has-icons-left has-icons-right">
                    <input id="email" class="input is-success" type="email" placeholder="Email"/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"/>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"/>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label for="subject" class="label has-text-light">
                Subject
            </label>
        </div>
        <div class="field-body">
            <div class="control is-expanded">
                <select id="subject" name="subject" class="select is-fullwidth">
                    <option value="freelance">Freelance Project</option>
                    <option value="fulltime">Full-time Employment</option>
                    <option value="startup">Startup Venture</option>
                    <option value="consulting">Product Consulting</option>
                </select>
            </div>
        </div>
    </div>

    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label for="message" class="label has-text-light">Message</label>
        </div>
        <div class="field-body">
            <div class="control is-expanded">
                <textarea id="message" name="message" class="textarea is-fullwidth" placeholder="How can I best help you?"/>
            </div>
        </div>
    </div>
    
    <div class="field is-horizontal">
        <div class="field-label"/>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
</form>