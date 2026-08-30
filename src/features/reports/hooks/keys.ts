export const reportKeys = {
    all: ['reports'] as const,
    lists: () => [...reportKeys.all, 'list'] as const,
    list: () => [...reportKeys.lists()] as const,
    details: () => [...reportKeys.all, 'detail'] as const,
    detail: (id: string) => [...reportKeys.details(), id] as const,
}
