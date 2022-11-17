<script lang="ts">
    // @ts-nocheck
    import "$lib/styles/style.scss";
</script>

<p><span class="secondary-accent">nathan</span> ~> <span class="tertiary-accent">neofetch</span></p>

<div>
    <img src="./images/me.jpg" alt="me, lifting my thumbs to indicate joy" />

    <ul>
        <li><span class="primary-accent">nathan</span>@<span class="primary-accent">2f42</span></li>
        <li>-----------</li>
        <li><span class="primary-accent">Name:</span> Nathan Patel</li>
        <li><span class="primary-accent">Currently:</span> Computer Science Undergrad @ University of Bristol</li>
        <li><span class="primary-accent">Site Last Updated:</span> {__COMMIT_DATE__} (<a href="https://github.com/2f42/2f42.github.io">{__COMMIT_HASH__.trim()}</a>)</li>
        <li><span class="primary-accent">Favourite Game:</span> Dota 2</li>
        <li><span class="primary-accent">Favourite Vegetable:</span> Onion</li>
        <li><span class="primary-accent">Github:</span> <a href="https://github.com/2f42/">@2f42</a></li>
        <li><span class="primary-accent">LinkedIn:</span> <a href="https://www.linkedin.com/in/nathan-patel-24b817207/">My Profile</a></li>
        <li>&nbsp;</li>
        <li>&nbsp;&nbsp;&nbsp;<span class="primary-accent-bg">&nbsp;&nbsp;&nbsp;</span><span class="tertiary-accent-bg">&nbsp;&nbsp;&nbsp;</span><span class="secondary-accent-bg">&nbsp;&nbsp;&nbsp;</span><span class="main-colour-bg">&nbsp;&nbsp;&nbsp;</span></li>
    </ul>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
    }
    
    ul {
        list-style: none;
        margin-top: 0;
        padding-left: 1rem;
    }

    img {
        max-width: 18rem;
    }
</style>