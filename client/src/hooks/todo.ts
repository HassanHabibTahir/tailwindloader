import { CreateNotes } from "./../../gql/graphql";
import { graphqlClient } from "@/api/api";
import { CreateNoteMutation } from "@/graphql/mutation/todo";
import { getAllNotes } from "@/graphql/query/todo";
import {
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
export const useCreateNote = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (note: CreateNotes) =>
      graphqlClient.request(CreateNoteMutation, { note }),
    onSuccess: async (payload) => {
      await queryClient.invalidateQueries("all-notes");
      console.log(JSON.stringify(payload), "note");
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
  return mutation;
};

export const useGetAllNotes = () => {
  const query = useQuery({
    queryKey: ["all-notes"],
    queryFn: () => graphqlClient.request(getAllNotes),
  });
  return { ...query, notes: query.data };
};
