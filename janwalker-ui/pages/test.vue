<template>
    <div class="h-screen">
        <div class="flex flex-col justify-center items-center h-screen text-left">
            <p class="font-bold text-sm mb-2">Connectivity status</p>
            <div class="border border-slate-300 border-1 rounded-xl shadow-lg p-4 w-4/12 mb-10">
                <div class="flex flex-row justify-between">
                    <p class="font-bold text-sm">cobas pro integrated solutions</p>
                    <p class="font-bold text-white bg-red-700 rounded-lg text-sm py-1 px-3">Disconnected</p>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-row mr-4">
                        <p class="text-sm">IP address: </p>
                        <p class="text-sm font-bold ml-1">10.123.123.11</p>
                    </div>
                    <div class="flex flex-row">
                        <p class="text-sm">Device name: </p>
                        <p class="text-sm font-bold ml-1">c_Pro1</p>
                    </div>
                </div>
            </div>

            <div class="border border-slate-300 border-1 rounded-xl shadow-lg p-4 w-4/12">
                <div class="flex flex-row justify-between text-center">
                    <p class="font-bold text-sm">12 items connected</p>
                    <p class="font-bold text-white bg-green-700 rounded-lg text-sm py-1 px-3">Disconnected</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>