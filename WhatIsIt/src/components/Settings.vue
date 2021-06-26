<template>
    <Frame>
        <Page>
        <ActionBar title="Video"/>
        <StackLayout class="modalForm" width="100% ">
                <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
                <StackLayout orientation="vertical">
                    <Button class="button"  text="Настройка графики"/>
                    <Button class="button" @tap="Graphon" text="240p"/>
                    <Button class="button" @tap="Graphon" text="360p"/>
                    <Button class="button" @tap="Graphon" text="480p"/>
                    <Button class="button" @tap="Graphon" text="720p"/>
                    <Button class="button" @tap="onCloseTap" text="Закрыть" />
                </StackLayout>
                </ScrollView>
            </StackLayout>
        </Page>
        </Frame>
</template>

<script>
export default {
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        },
        Graphon() {
            alert(({
            title: "Complete",
            message: "Изменения успешно применены",
            okButtonText: "Подтвердить"
            }));
        }
    }
}
</script>
