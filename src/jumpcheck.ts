import { storage, router, network } from './tsimports';

export async function Jump() {
    storage.get({
        key: "bilibili_account",
        success: async (bilibili_account) => {
            if (bilibili_account.length < 1) {
                router.replace({
                    uri: "pages/login"
                })
            } else {
                router.replace({
                    uri: "pages/prepage"
                })
            }
        }
    })
}

export async function NetworkCheck(): Promise<boolean> {
    return new Promise((resolve) => {
        network.getType({
            success: function (data: { type: string }) {
                if (!data.type) {
                    console.log('Network type is empty or undefined.');
                    resolve(false);
                } else if (data.type === 'none') {
                    resolve(false);
                } else {
                    resolve(true);
                }
            },
            fail: function () {
                console.log('Failed to get network type.');
                resolve(false);
            },
            complete: function () {
                console.log('Network type check completed.');
            }
        });
    });
}