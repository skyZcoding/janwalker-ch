<template>
    <div>
        <a class="absolute top-0 left-0" href="/">
            <ArrowBackIcon class="h-16 m-3 hover:text-slate-600 text-slate-900" alt="Back to home screen" />
        </a>
        <div class="h-screen flex flex-col justify-center items-center">
            <div class="text-xl font-bold font-sans text-slate-600">
                Projects
            </div>
            <div class="pt-2 flex flex-col items-center border-slate-600 border-t-4 w-1/3">
                <div class="flex flex-row mb-2 w-full min-w-40 ">
                    <div class="flex flex-col items-center w-full">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            cobas&#174 mobile solution
                        </div>
                        <div class="font-sans font-medium 
                                            text-center text-slate-500
                                            text-sm">
                            He developed multiple service on the product during his time working at Roche diagnostics.
                        </div>
                        <a class="font-sans text-sm font-medium  text-slate-600 border-b border-slate-600"
                            href="https://diagnostics.roche.com/global/en/products/instruments/cobas-mobile-solution-ins-6695.html">
                            Project page
                        </a>
                    </div>
                </div>
                <div class="flex border-slate-400 border-t-2 flex-row mb-2 w-full min-w-40 ">
                    <div class="flex flex-col items-center w-full">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            Volunteering App
                        </div>
                        <div class="font-sans font-medium 
                                            text-center text-slate-500
                                            text-sm">
                            He created in a team a working prototype app to unite the different volunteering companies with
                            the
                            actual volunteers. This was done at the Hackzurich 2022.
                        </div>
                        <a class="font-sans text-sm font-medium  text-slate-600 border-b border-slate-600"
                            href="https://old.creatorspace.dev/kennybets/projects/hiFkMYxIClrrVQAj">
                            Project page
                        </a>
                    </div>
                </div>
                <div class="flex border-slate-400 border-t-2 flex-row mb-2 w-full min-w-40">
                    <div class="flex flex-col items-center w-full">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            Home page
                        </div>
                        <div class="font-sans font-medium 
                                            text-center text-slate-500
                                            text-sm">
                            He created the home page to display his cv in a creative way.
                        </div>
                        <a class="font-sans text-sm font-medium  text-slate-600 border-b border-slate-600"
                            href="https://github.com/skyZcoding/janwalker-ch">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowBackIcon from '~/components/ArrowBackIcon.vue'

export default {
    components: {
        ArrowBackIcon
    }
}
</script>