<template>
    <div>
        <a class="absolute top-0 left-0" href="/">
            <ArrowBackIcon class="h-16 m-3 hover:text-slate-600 text-slate-900" alt="Back to home screen" />
        </a>
        <div class="h-screen flex flex-col justify-center items-center">
            <div class="text-lg font-medium font-sans text-slate-600 border-slate-600 border-b-4">
                Feel free to reach out to me through one of the following channels
            </div>
            <div class="pt-2
                                flex flex-col">
                <a href="https://github.com/skyZcoding" class="group flex flex-row mb-2 items-center">
                    <GitHubIcon alt="github" class="h-8 mr-1 text-slate-600 group-hover:text-slate-900" />
                    <div class="flex flex-row">
                        <div class="font-sans font-medium
                                            text-slate-600 duration-500
                                            group-hover:text-slate-900">
                            Github
                        </div>
                        <div class="font-sans font-medium text-slate-600 group-hover:text-slate-900 ml-6 duration-500">
                            skyZcoding
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/jan-walker-jw/" class="group flex flex-row mb-2 items-center">
                    <LinkedInIcon alt="linkedin" class="h-8 mr-1 text-slate-600 group-hover:text-slate-900" />
                    <div class="flex flex-row">
                        <div class="font-sans font-medium
                                            text-slate-600 duration-500
                                            group-hover:text-slate-900">
                            LinkedIn
                        </div>
                        <div class="font-sans font-medium text-slate-600 group-hover:text-slate-900 ml-4 duration-500">
                            jan-walker-jw
                        </div>
                    </div>
                </a>
                <a href="mailto:jan.walker.jw2@gmail.com" class="group flex flex-row mb-2 items-center">
                    <EmailIcon alt="email" class="h-8 mr-1 text-slate-600 group-hover:text-slate-900" />
                    <div class="flex flex-row">
                        <div class="font-sans font-medium
                                            text-slate-600 duration-500
                                            group-hover:text-slate-900">
                            Email
                        </div>
                        <div class="font-sans font-medium text-slate-600 group-hover:text-slate-900 ml-10 duration-500">
                            jan.walker.jw2@gmail.com
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import GitHubIcon from "~/components/GithubIcon.vue"
import LinkedInIcon from "~/components/LinkedInIcon.vue"
import EmailIcon from '~/components/EmailIcon.vue'
import ArrowBackIcon from '~/components/ArrowBackIcon.vue'

export default {
    components: {
        GitHubIcon,
        LinkedInIcon,
        EmailIcon,
        ArrowBackIcon
    }
}
</script>
