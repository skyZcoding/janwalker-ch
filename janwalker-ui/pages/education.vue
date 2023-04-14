<template>
    <div>
        <a class="absolute top-0 left-0" href="/">
            <ArrowBackIcon class="h-16 m-3 hover:text-slate-600 text-slate-900" alt="Back to home screen" />
        </a>
        <div class="h-screen flex flex-col justify-center items-center">
            <div class="text-xl font-bold font-sans text-slate-600">
                Education
            </div>
            <div class="pt-2 flex flex-col border-slate-600 border-t-4">
                <div class="group flex flex-row mb-2">
                    <div class="flex flex-col items-center min-w-40">
                        <div class="font-sans font-semibold text-slate-600">

                            Gewerblich-industrielles Bildungszentrum Zug
                        </div>
                        <div class="font-sans font-medium 
                                            text-slate-500">
                            Informatiker Fachrichtung Applikationsentwicklung EFZ
                        </div>
                        <div class="font-sans text-sm font-medium  text-slate-500">
                            Aug. 2018 - Aug. 2022
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