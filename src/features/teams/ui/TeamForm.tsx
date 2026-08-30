import {
    Button,
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    Input,
    Spinner,
} from '@/widgets'
import { useForm } from '@tanstack/react-form'
import { useNavigate } from 'react-router'
import { z } from 'zod'
import { useCreateTeam } from '../hooks/useCreateTeam'
import { usePatchTeam } from '../hooks/usePatchTeam'
import type { ITeam } from '../types'

const formSchema = z.object({
    group_id: z.number({ message: 'Поле должно быть числом' }),
    name: z
        .string()
        .min(3, 'Минимальное количество символов 3')
        .max(100, 'Максимальное количество символов 100'),
})

type TeamFormProps = {
    initialTeam?: ITeam
}

export function TeamForm({ initialTeam }: TeamFormProps) {
    const navigate = useNavigate()
    const createTeam = useCreateTeam()
    const updateTeam = usePatchTeam()
    const isEditing = !!initialTeam

    const form = useForm({
        defaultValues: {
            group_id: initialTeam?.telegram_chat_id || 0,
            name: initialTeam?.name || '',
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                if (isEditing) {
                    await updateTeam.mutateAsync({
                        id: initialTeam.id!,
                        ...value,
                    })
                    navigate(`/teams/${initialTeam.id}`)
                } else {
                    await createTeam.mutateAsync(value)
                    navigate('/teams')
                }
            } catch (error) {
                // ошибки обрабатываются в хуках
            }
        },
    })

    return (
        <form
            id="team-form"
            className="py-8 flex flex-col gap-5"
            onSubmit={async (e) => {
                e.preventDefault()
                await form.handleSubmit()
            }}
        >
            <FieldGroup>
                <form.Field
                    name="group_id"
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>
                                    ID группы
                                </FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value || ''}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(
                                            e.target.valueAsNumber,
                                        )
                                    }
                                    aria-invalid={isInvalid}
                                    placeholder="Введите ID группы"
                                    autoComplete="off"
                                    type="number"
                                />
                                {isInvalid && (
                                    <FieldError
                                        errors={field.state.meta.errors}
                                    />
                                )}
                            </Field>
                        )
                    }}
                />
                <form.Field
                    name="name"
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>
                                    Название группы
                                </FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                    aria-invalid={isInvalid}
                                    placeholder="Введите название группы"
                                    autoComplete="off"
                                />
                                {isInvalid && (
                                    <FieldError
                                        errors={field.state.meta.errors}
                                    />
                                )}
                            </Field>
                        )
                    }}
                />
            </FieldGroup>
            <Button
                type="submit"
                form="team-form"
                className="mt-4"
                disabled={createTeam.isPending || updateTeam.isPending}
            >
                {createTeam.isPending || updateTeam.isPending ? (
                    <Spinner />
                ) : isEditing ? (
                    'Обновить команду'
                ) : (
                    'Создать команду'
                )}
            </Button>
        </form>
    )
}
