<script lang="ts">
	import content from './content';
	import circlesInSquare from '$assets/images/circlesInSquare.svg';
	import Alert from 'sweetalert2';
	import emailJs from '@emailjs/browser';

	import {
		PUBLIC_EMAILJS_SERVICE_KEY,
		PUBLIC_CONTACT_TEMPLATE_KEY,
		PUBLIC_EMAILJS_API_KEY,
	} from '$env/static/public';

	let isLoading = $state(false);

	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	});

	function submit() {
		isLoading = true;
		let sender = `${formData.firstName} ${formData.lastName}`;
		let data = {
			name: sender,
			email: formData.email,
			message: `You got a new inquiry from Layolauv.me
        Name : ${sender},
        Email: ${formData.email},
        Phone: ${formData.phone}.
				Message: ${formData.message}`
		};

		emailJs.send(PUBLIC_EMAILJS_SERVICE_KEY, PUBLIC_CONTACT_TEMPLATE_KEY, data, PUBLIC_EMAILJS_API_KEY)
			.then(
				() => {
					isLoading = false;
					Alert.fire({
						title: 'Thank you for reaching out!',
						text: 'I\'d reach back to you in the next few days!',
						icon: 'success',
					});
				},
				(error) => {
					isLoading = false;
				}
			);
	}

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
					/>
				</svg>
			</a>
		</div>
		<div class="info__connect">
			<h3 class="info__connect-title">{content.info.connect.title}</h3>
			<ul class="info__connect-links">
				{#each content.info.connect.socials as socials}
					<li>
						<a href={socials.url}>
							<img src={socials.img} alt="logo" class="hidden! dark:block!" />
							<img src={socials.img2} alt="logo" class="block! dark:hidden!" />
						</a>
					</li>
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
		<form class="contact__form" on:submit|preventDefault={submit}>
			<div class="form-row">
				<div class="form-field">
					<label for="first_name">First Name</label>
					<input type="text" name="first_name" id="first_name" placeholder="Enter First Name"
								 bind:value={formData.firstName} required>
				</div>
				<div class="form-field">
					<label for="last_name">Last Name</label>
					<input type="text" name="last_name" id="last_name" placeholder="Enter Last Name"
								 bind:value={formData.lastName} required>
				</div>
			</div>
			<div class="form-row">
				<div class="form-field">
					<label for="email">Email</label>
					<input type="text" name="email" id="email" placeholder="Enter your Email" bind:value={formData.email}
								 required>
				</div>
				<div class="form-field">
					<label for="phone">Phone Number</label>
					<input type="text" name="phone" id="phone" placeholder="+xx xxx xxx" bind:value={formData.phone} required>
				</div>
			</div>
			<div class="form-field">
				<label for="message">Message</label>
				<textarea rows="5" maxlength="800" class="form-control" name="message" id="message"
									placeholder="Enter your Message" bind:value={formData.message}></textarea>
			</div>
			<input type="submit" value="Send" disabled={isLoading}>
		</form>
	</div>
</section>

<style lang="scss">
  /* svelte-ignore css_unused_selector */
  * {
    @apply font-jakarta;
  }

  div:where(.swal2-container) {
    div:where(.swal2-popup) {
      @apply bg-white-550;
      @apply dark:bg-dark-500;
    }

    h2:where(.swal2-title) {
      @apply text-dark-200;
      @apply dark:text-white-500;
    }

    div:where(.swal2-html-container) {
      @apply text-grey-300;
      @apply dark:text-white-400;
    }

    button:where(.swal2-confirm) {
      @apply bg-foundation-blue-600 text-white-400;
      @apply dark:bg-foundation-blue-400 dark:text-grey-700;
    }
  }
  section {
    @apply dark:bg-dark-500;
  }

  .custom-row {
    > :first-child {
      @apply md:w-[35%];

    }
  }

  .info {
    &__title {
      @apply text-[16px] md:text-[58px] uppercase text-dark-200 font-semibold tracking-wide;
      @apply dark:text-white-500;

    }

    &__row {
      @extend .custom-row;
      @apply flex max-md:flex-col mt-10;


      > div {
        @apply py-[1%];
      }
    }

    &__enquiries-title, &__connect-title {
      @apply font-medium mb-5 md:mb-10;
      @apply text-grey-300;
      @apply dark:text-white-500;
    }

    &__enquiries {
      @apply max-md:mx-[10%] max-md:border-b-1 md:border-r-1;
      @apply border-b-grey-100 md:border-r-grey-100;
      @apply dark:border-b-dark-250 md:dark:border-r-dark-250;
      &-email {
        @apply max-md:mb-8 flex w-[fit-content] p-4 py-3 rounded-md border-1;
        @apply text-grey-400 bg-white-300 border-grey-100;
        @apply dark:text-white-600 dark:bg-grey-600 dark:border-grey-700;

        &-icon {
          @apply flex my-auto ml-4 h-[10px];
          path {
            @apply fill-foundation-blue-600
          }
        }
      }

    }

    &__connect {
      @apply max-md:mx-[10%] max-md:mt-5 max-md:mb-10 md:pl-[5%] block;
      &-links {
        @apply grid grid-cols-3 gap-5;
        li {
          a {
            @apply py-4 px-6 block border-1 rounded-md;
            @apply bg-white-300 border-grey-100;
            @apply dark:bg-grey-600 dark:border-grey-700;
          }
        }
      }
    }
  }


  .contact {
    @apply pt-0;
    &__row {
      @extend .custom-row;
      @apply flex max-md:flex-col border-t-1;
      @apply border-grey-100;
      @apply dark:border-dark-250;

      > :first-child {
        @apply md:border-r-1;
        @apply md:border-grey-100;
        @apply md:dark:border-r-dark-250;
      }

      > * {
        @apply max-md:mx-[10%];
      }
    }

    &__cta {
      @apply max-md:my-[15%];
      &-wrapper {
        @apply flex flex-col justify-around;
      }

      &-heading {
        @apply font-medium text-[28px] md:text-[54px];
        @apply dark:text-white
      }

      img {
        @apply max-md:w-[15%] max-md:mb-3;
      }
    }

    &__form {
      @apply flex flex-col  md:p-[5%] md:w-[60%];

      .form-row {
        @apply flex flex-wrap justify-between;
        > * {
          @apply w-full md:w-[45%];
        }
      }

      .form-field {
        @apply flex flex-col mb-[5%];
      }

      label {
        @apply text-[14px] md:text-[18px] font-medium mb-5;
        @apply text-grey-400;
        @apply dark:text-white-400;
      }

      input:not([type="submit"]), textarea {
        @apply border-1 ring-4 rounded-sm text-[14px] md:text-[18px] p-[10px];
        @apply border-grey-100 ring-white-100 text-grey-300 bg-white-300;
        @apply dark:border-grey-400 dark:ring-[#191919] dark:text-light-400 dark:bg-grey-700;
      }

      input[type="submit"] {
        @apply w-full md:w-[fit-content] max-md:text-[14px] font-medium py-2 md:py-5 md:px-10 rounded-sm cursor-pointer;
        @apply bg-foundation-blue-600 text-white-400;
        @apply dark:bg-foundation-blue-400 dark:text-grey-700;

				&:disabled {
          @apply bg-foundation-blue-100 cursor-not-allowed;
          @apply dark:bg-blue-900 ;
				}
      }
    }
  }

</style>
