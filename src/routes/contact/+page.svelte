<script lang="ts">
	import content from './content';
	import circlesInSquare from '$assets/images/circlesInSquare.svg';

</script>

<svelte:head>
	<title>Contact Me?</title>
</svelte:head>

<section class="info">
	<h2 class="info__title">{content.info.title}</h2>
	<div class="info__row">
		<div class="info__enquiries">
			<h3 class="info__enquiries-title">{content.info.inquiries.text}</h3>
			<a class="info__enquiries-email" href="mailto:iam@layolauv.me">
				<span>{content.info.inquiries.email}</span>
				<svg class="info__enquiries-email-icon" width="20" height="20" viewBox="0 0 17 17" fill="#6D7F8F"
						 xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
								d="M4.5 4.91738e-07L15.75 0C15.9489 0 16.1397 0.0790176 16.2803 0.21967C16.421 0.360322 16.5 0.551088 16.5 0.75V12C16.5 12.4142 16.1642 12.75 15.75 12.75C15.3358 12.75 15 12.4142 15 12V2.56066L1.28033 16.2803C0.987437 16.5732 0.512563 16.5732 0.21967 16.2803C-0.0732233 15.9874 -0.0732233 15.5126 0.21967 15.2197L13.9393 1.5L4.5 1.5C4.08579 1.5 3.75 1.16421 3.75 0.75C3.75 0.335787 4.08579 4.91738e-07 4.5 4.91738e-07Z"
								fill="#1E1E1E" />
				</svg>
			</a>
		</div>
		<div class="info__connect">
			<h3 class="info__connect-title">{content.info.connect.title}</h3>
			<ul class="info__connect-links">
				{#each content.info.connect.socials as socials}
					<li><a href={socials.url}><img src={socials.img} /></a></li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="contact">
	<div class="contact__row">
		<div class="contact__cta-wrapper">
			<div class="contact__cta">
				<img src={circlesInSquare} alt="Get In Touch" />
				<h4 class="contact__cta-heading">Get In Touch</h4>
			</div>
		</div>
		<form class="contact__form">
			<div class="form-row">
				<div class="form-field">
					<label for="first_name">First Name</label>
					<input type="text" name="first_name" id="first_name" placeholder="Enter First Name" required>
				</div>
				<div class="form-field">
					<label for="last_name">Last Name</label>
					<input type="text" name="last_name" id="last_name" placeholder="Enter Last Name" required>
				</div>
			</div>
			<div class="form-row">
				<div class="form-field">
					<label for="email">Email</label>
					<input type="text" name="email" id="email" placeholder="Enter your Email" required>
				</div>
				<div class="form-field">
					<label for="phone">Phone Number</label>
					<input type="text" name="phone" id="phone" placeholder="+xx xxx xxx" required>
				</div>
			</div>
			<div class="form-field">
				<label for="message">Message</label>
				<textarea rows="5" maxlength="800" class="form-control" name="message" id="message"
									placeholder="Enter your Message"></textarea>
			</div>
			<input type="submit" value="Send">
		</form>
	</div>
</section>

<style lang="scss">
  /* svelte-ignore css_unused_selector */
  * {
    @apply font-jakarta;
  }

  section {
    @apply bg-white-400;
    @apply dark:bg-dark-500;
  }

  .custom-row {
    > :first-child {
      @apply w-[35%];

    }
  }

  .info {
    &__title {
      @apply text-[16px] md:text-[58px] uppercase text-dark-200 font-semibold tracking-wide w-[30%];
      @apply dark:text-white-500;

    }

    &__row {
      @extend .custom-row;
      @apply flex mt-10;


      > div {
        @apply py-[1%];
      }
    }

    &__enquiries-title, &__connect-title {
      @apply font-medium text-white-500 mb-10;
    }

    &__enquiries {
      @apply border-r-3;
      @apply dark:border-r-dark-250;
      &-email {
        @apply flex w-[fit-content] p-4 py-3 rounded-md;
        @apply dark:text-white-600 dark:bg-grey-600;

        &-icon {
          @apply flex my-auto ml-4;
          path {
            fill: var(--color-foundation-blue-600)
          }
        }
      }

    }

    &__connect {
      @apply pl-[5%] block;
      &-links {
        @apply flex;
        li {
          @apply mx-4;
          a {
            @apply dark:bg-grey-600 py-4 px-6 block;
          }

          &:first-child {
            @apply ml-0;
          }
        }
      }
    }
  }


  .contact {
    @apply pt-0;
    &__row {
      @extend .custom-row;
      @apply flex border-t-2;
      @apply dark:border-t-dark-250;

      > :first-child {
        @apply border-r-3;
        @apply dark:border-r-dark-250;
      }
    }

    &__cta {
      &-wrapper {
        @apply flex flex-col justify-around;
      }

      &-heading {
        @apply font-medium text-[54px];
        @apply dark:text-white
      }
    }

    &__form {
      @apply flex flex-col p-[5%] w-[60%];

      .form-row {
        @apply flex justify-between;
        > * {
          @apply w-[45%];
        }
      }

      .form-field {
        @apply flex flex-col mb-[5%];
      }

      label {
        @apply text-[18px] font-medium mb-5;
        @apply dark:text-white-400;
      }

      input:not([type="submit"]), textarea {
        @apply border-2 ring-4 rounded-sm text-[18px] p-[10px];
        @apply dark:border-grey-400 dark:ring-[#191919] dark:text-light-400;
      }

      input[type="submit"] {
				@apply w-[fit-content] py-5 px-10 rounded-sm;
				@apply dark:bg-foundation-blue-400;
      }
    }
  }

</style>
