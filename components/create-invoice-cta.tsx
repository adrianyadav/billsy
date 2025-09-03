import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconPlus, IconFileInvoice } from "@tabler/icons-react";

export function CreateInvoiceCTA() {
    return (
        <div className="px-4 lg:px-6">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <IconFileInvoice className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Create New Invoice
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Generate a new invoice for your patients quickly and easily
                                </p>
                            </div>
                        </div>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <IconPlus className="mr-2 h-4 w-4" />
                            Create Invoice
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
