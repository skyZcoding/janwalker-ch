<template>
    <div>
        <a class="absolute top-0 left-0" href="/">
            <ArrowBackIcon class="h-16 m-3 hover:text-slate-600 text-slate-900" alt="Back to home screen" />
        </a>
        <div class="h-screen flex flex-col justify-center items-center">
            <div class="text-xl font-bold font-sans text-slate-600">
                Experience
            </div>
            <div class="pt-2 flex flex-col border-slate-600 border-t-4 w-1/3">
                <div class="flex flex-row mb-2">
                    <div class="flex flex-col items-center min-w-40">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            Apprenticeship as a software developer
                        </div>
                        <div class="font-sans font-medium 
                                        text-center text-slate-500
                                        text-sm">
                            The apprenticeship is a common starting ground in
                            switzerland to start as a software developer.
                            During this period the apprentice will learn the basic to advance knowledge of the topics which
                            are
                            needed
                            to be a software developer.
                        </div>
                        <div class="font-sans text-sm font-medium  text-slate-600">
                            Aug. 2018 - Aug. 2022
                        </div>
                    </div>
                </div>
                <div class="flex border-slate-400 border-t-2 flex-row mb-2">
                    <div class="flex flex-col items-center min-w-40">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            Junior software developer
                        </div>
                        <div class="font-sans font-medium 
                                        text-center text-slate-500
                                        text-sm">
                            He worked as a full stack developer on multiple project using mainly .NET. As well were the user
                            devices managed by him through the VMWare Workspace system.
                        </div>
                        <div class="font-sans text-sm font-medium  text-slate-600">
                            Aug. 2022 - Present
                        </div>
                    </div>
                </div>
                <div class="flex border-slate-400 border-t-2 flex-row mb-2">
                    <div class="flex flex-col items-center min-w-40">
                        <div class="text-lg font-sans font-semibold text-slate-600">
                            Teaching an intercompany course for apprentices about Blazor
                        </div>
                        <div class="font-sans font-medium 
                                        text-center text-slate-500
                                        text-sm">
                            As a course instructor he taught the first year apprentices how to develope a web frontend with
                            Blazor.
                        </div>
                        <div class="font-sans text-sm font-medium  text-slate-600">
                            Nov. 2022 - Dec. 2022
                        </div>
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

<style></style>